import p5 from "p5";
import ZodiacSign from "./components/ZodiacSign";

export type SketchProps = {
  count: number;
};

const sketch = (p: p5) => {
  let count: number;
  let delay: number;
  let z: ZodiacSign;
  let renderNum: number;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.frameRate(30);
    delay = 30;
    renderNum = 0;
    initializeBackground();
  };

  p.draw = () => {
    count++;
    p.background(5);
    if (count < delay) return;
    if (count === delay + 30) z.toggleMove();

    z.update();
    z.display();
  };

  p.myCustomRedrawAccordingToNewPropsHandler = (props: SketchProps) => {
    if (!props.count) return;
    if (renderNum !== props.count) {
      renderNum += 1;
      initializeBackground();
    }
  };

  p.mousePressed = () => {
    if (!z) return; // FIXME: 原因はわからないがロード後すぐにタッチするとエラーが走る
    z.flash();
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    initializeBackground();
  };

  function initializeBackground() {
    z = new ZodiacSign(p, 0, 0, p.width, p.height);
    count = 0;
  }
};

export default sketch;
