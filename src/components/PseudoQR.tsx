import { COLOR } from "../styles/tokens";

interface PseudoQRProps {
  seed?: number;
  size?: number;
}

/**
 * 擬似QRコード。
 * 残高などの値から見た目のマス目パターンを生成して表示する
 * （実際の決済連携時は本物のQR生成ライブラリに差し替える）。
 */
export function PseudoQR({ seed = 1, size = 240 }: PseudoQRProps) {
  const cells = 11;
  const cell = size / cells;

  const rnd = (n: number) => {
    const x = Math.sin(n * 999 + seed * 37.13) * 10000;
    return x - Math.floor(x);
  };

  const squares: JSX.Element[] = [];
  for (let y = 0; y < cells; y++) {
    for (let x = 0; x < cells; x++) {
      const isFinder =
        (x < 3 && y < 3) || (x > cells - 4 && y < 3) || (x < 3 && y > cells - 4);
      const on = isFinder
        ? !(x === 1 + (x > cells - 4 ? cells - 4 : 0) && y === 1)
        : rnd(x * 31 + y * 17) > 0.52;

      if (on) {
        squares.push(
          <rect
            key={`${x}-${y}`}
            x={x * cell}
            y={y * cell}
            width={cell}
            height={cell}
            fill={COLOR.ink}
          />
        );
      }
    }
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      role="img"
      aria-label="支払い用のもよう"
    >
      <rect x="0" y="0" width={size} height={size} fill={COLOR.paper} />
      {squares}
    </svg>
  );
}
