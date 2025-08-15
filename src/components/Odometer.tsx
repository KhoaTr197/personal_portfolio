import { OdometerProps, OdometerDiscProps, OdometerDiscRef, OdometerRef } from "@/types/component";
import { formatNumber } from "@/utils";
import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";

const OdometerDisc = forwardRef<OdometerDiscRef, OdometerDiscProps>(({
  value = 0,
  config
}: OdometerDiscProps, ref) => {
  const [discValue, setDiscValue] = useState<number>(value);
  const divRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    getValue() {
      return discValue;
    },
    setValue(newValue: number) {
      setDiscValue(newValue);
    },
    nextTick() {
      setDiscValue(prev => prev === 9 ? 0 : prev + 1);
    }
  }))

  return (
    <div
      ref={divRef}
      className="flex flex-col-reverse"
      style={{
        transform: `translateY(${discValue * config.digitHeight}px) translateZ(0)`,
        transition: `transform ${config.duration / 1000}s ${config.type}`,
        willChange: 'transform',
      }}
    >
      {Array.from({ length: 10 }, (_, i) => (
        <div key={i}>{i}</div>
      ))}
    </div>
  )
})

const Odometer = forwardRef<OdometerRef, OdometerProps>(({
  value = 0,
  target = 0,
  className,
  format = '',
  autoStart = true,
  duration = 2000,
  transition = {
    type: 'ease-in-out',
    duration: 500,
  }
}, ref) => {
  // Negative numbers are not supported
  if (value < 0) return null;

  // Odometer Value
  const [currentValue, setCurrentValue] = useState<number>(value);
  const formattedValue = useMemo(() => formatNumber(currentValue, format), [currentValue, format]);

  // Odometer Disc
  const digits: number[] = useMemo(() => formattedValue.toString().split('').map(Number), [formattedValue]);
  const nDisc = useMemo(() => digits.length, [digits])
  const initRef = useRef<HTMLDivElement>(null);
  const odometerRef = useRef<HTMLDivElement>(null);
  // Array of refs for each disc:
  // 0 - rightmost digit
  // ...
  // n - leftmost digit
  const discRefs = useRef<OdometerDiscRef[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Value -> Target essentials
  const totalSteps = useMemo(() => target - value, [target, value]);
  const stepInterval = useMemo(() => duration / totalSteps, [duration, totalSteps]);

  // Config
  const [config, setConfig] = useState({
    digitHeight: 0,
    autoStart: autoStart,
    ...transition,
    duration: stepInterval,
  })

  // Get digit height of initial value
  useEffect(() => {
    if (initRef.current) {
      setConfig({
        ...config,
        digitHeight: initRef.current.getBoundingClientRect().height
      });
    }
  }, [initRef.current, currentValue, className,])

  const nextTick = useCallback(() => {
    setCurrentValue(prev => prev + 1);
    let carry = 1;

    for (let i = 0; i < nDisc && carry > 0; i++) {
      const currentDigitValue = discRefs.current[i]?.getValue() ?? 0;

      discRefs.current[i]?.nextTick();

      // If this digit rolls over to 0, carry continues. Otherwise it will stop at the next iteration
      carry = currentDigitValue === 9 ? 1 : 0;
    }
  }, [nDisc])

  useEffect(() => {
    if (!config.autoStart || !target || currentValue >= target) return;

    intervalRef.current = setInterval(() => {
      if (currentValue > target) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        return;
      }

      nextTick();
    }, stepInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [config, target, duration, value, currentValue, nextTick]);

  useImperativeHandle(ref, () => ({
    nextTick() {
      nextTick();
    },
    start() {
      setConfig({ ...config, autoStart: true });
    },
    stop() {
      setConfig({ ...config, autoStart: false });
    },
    toggle() {
      setConfig(prev => ({ ...prev, autoStart: !prev.autoStart }));
    },
    reset() {
      setConfig({ ...config, autoStart: false });
      setCurrentValue(value);
      formatNumber(value, format).toString().split('').map(Number).forEach((val, i) => discRefs.current[nDisc - 1 - i].setValue(val));
    },
    getValue() {
      return currentValue;
    }
  }))

  return (
    <div
      ref={odometerRef}
      className={`flex w-fit overflow-hidden relative ${className}`}
      style={{ height: `${config.digitHeight}px` }}
    >
      {/* Initial value - for height evaluation to hide the overflowed section of the disc */}
      <div
        ref={initRef}
        className={`absolute opacity-0 invisible ${className}`}
      >
        {currentValue}
      </div>
      {/* Odometer */}
      {digits.map((digit, i) => (
        <OdometerDisc
          ref={(el: any) => discRefs.current[nDisc - 1 - i] = el}
          key={i}
          value={digit}
          config={config}
        />
      ))}
    </div>
  )
})

export default Odometer