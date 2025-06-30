import { LevelBarConfig, LevelBarProps } from "@/types/component";
import { useMemo } from "react";

const LevelBar = ({
  level,
  maxLevel = 3,
  legend,
  config
}: LevelBarProps) => {
  const fillCount = useMemo(() => {
    return Math.min(level, maxLevel);
  }, [level, maxLevel]);

  const barConfig: LevelBarConfig = useMemo(() => {
    return {
      size: 8,
      layout: "horizontal",
      color: {
        1: "bg-[#FFE]",
        2: "bg-[#FFDB58]",
        3: "bg-[#FF9500]",
      },
      ...config,
    }
  }, [config])

  return (
    <div className={`flex gap-1 w-full h-full ${barConfig?.layout === "horizontal" ? "" : "flex-col"}`}>
      {Array.from({ length: maxLevel }, (_, i) => {
        return (
          <div key={i} className={`flex flex-1 gap-2 ${barConfig?.layout === "horizontal" ? "flex-col" : ""}`}>
            <div
              key={i}
              style={{
                width: barConfig?.layout === "vertical" ? `${barConfig?.size}px` : "100%",
                height: barConfig?.layout === "horizontal" ? `${barConfig?.size}px` : "100%",
              }}
              className={`rounded-sm ${i < fillCount ? `${barConfig?.color && barConfig.color[i + 1]}` : "bg-gray-700"
                }`}
            />
            {legend && legend[i] && (
              <div className={`text-sm text-center place-content-center`}>
                {legend[i]}
              </div>
            )}
          </div>
        )
      })}
    </div>
  );
}
export default LevelBar;