import { Flip } from "number-flip";

export function countdownFrom(counter) {
  const countdown = new Flip({
    node: document.getElementById("timer-number"),
    from: counter,
  });
  const interval = setInterval(() => {
    countdown.flipTo({ to: counter - 1 });
    counter = counter - 1;
    if (counter == 0) {
      clearInterval(interval);
    }
  }, 1000);
}
