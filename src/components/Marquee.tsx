import { MarqueeProps } from '@/types/component'
import { Children, Fragment, useCallback, useEffect, useRef, useState } from 'react'

const Marquee = ({
  duration = 15,
  direction = 'left-to-right',
  marqueeBarStyle = '',
  children,
}: MarqueeProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [multiplier, setMultiplier] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)
  const animDirection = direction === 'left-to-right' ? 'normal' : 'reverse';

  const calculateWidth = useCallback(() => {
    if (!containerRef.current || !marqueeRef.current) return;

    const containerWidth = containerRef.current.getBoundingClientRect().width;
    const marqueeWidth = marqueeRef.current.getBoundingClientRect().width;

    if (marqueeWidth && containerWidth) {
      setMultiplier(marqueeWidth < containerWidth ? Math.ceil(containerWidth / marqueeWidth) : 1);
    } else {
      setMultiplier(1);
    }

  }, [containerRef]);

  useEffect(() => {
    if (!isMounted) return;

    calculateWidth();

    const handleResize = () => calculateWidth();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [calculateWidth, containerRef, isMounted]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const multiplyChildren = useCallback((multiplier: number) => {
    const multiplierArr = [...Array(Number.isFinite(multiplier) && multiplier >= 0 ? Math.ceil(multiplier) : 0)];

    return multiplierArr.map((_, idx) => (
      <Fragment key={idx}>
        {Children.map(children, (child) => {
          return (
            <div>
              {child}
            </div>
          );
        })}
      </Fragment>
    ));
  }, [children]);

  return !isMounted ? null : (
    <div
      ref={containerRef}
      className={`marquee-container flex min-w-full w-fit ${marqueeBarStyle} overflow-x-hidden`}
      style={{
        height: marqueeRef.current?.getBoundingClientRect().height,
      }}
    >
      {/* Initial Marquee - Need to clone initial children to fill the marquee container */}
      <div
        className="marquee flex animate-infinite-scroll overflow-x-hidden"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: animDirection,
        }}
      >
        <div
          ref={marqueeRef}
          className="marquee-initial flex"
        >
          {Children.map(children, (child) => (
            <div>
              {child}
            </div>
          ))}
          {multiplyChildren(multiplier - 1)}
        </div>
      </div>
      {/* Duplicated Marquee */}
      <div
        className="marquee flex animate-infinite-scroll"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: animDirection,
        }}
      >
        {multiplyChildren(multiplier)}
      </div>
    </div >
  )
}

export default Marquee