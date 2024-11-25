import styles from "./page.module.css"
import stylesCalculator from "./calculator.module.css"

export default function Home() {
  return (
    <div className={stylesCalculator.mainDiv} style={{ backgroundColor: "#ccc" }}>
        <div className={stylesCalculator.calculator}>
          <div className={stylesCalculator.display}>0</div>
          <div className={stylesCalculator.buttons}>
            <button className={stylesCalculator.button}>9</button>
            <button className={stylesCalculator.button}>8</button>
            <button className={stylesCalculator.button}>7</button>
            <button className={stylesCalculator.button}>+</button>
            <button className={stylesCalculator.button}>6</button>
            <button className={stylesCalculator.button}>5</button>
            <button className={stylesCalculator.button}>4</button>
            <button className={stylesCalculator.button}>-</button>
            <button className={stylesCalculator.button}>3</button>
            <button className={stylesCalculator.button}>2</button>
            <button className={stylesCalculator.button}>1</button>
            <button className={stylesCalculator.button}>*</button>
            <button className={stylesCalculator.button}>C</button>
            <button className={stylesCalculator.button}>0</button>
            <button className={stylesCalculator.button}>=</button>
            <button className={stylesCalculator.button}>/</button>
          </div>
        </div>
    </div>
  );
}
