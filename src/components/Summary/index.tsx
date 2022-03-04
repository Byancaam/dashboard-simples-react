import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg"
import totalcomeImg from "../../assets/total.svg"

import { Container } from "../Summary/styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          Entradas
          <img src={incomeImg} alt='Entradas' />
        </header>
        <strong>R$ 10.000,00</strong>
      </div>

      <div>
        <header>
          Saidas
          <img src={outcomeImg} alt='Saidas' />
        </header>
        <strong> - R$ 5.000,00</strong>
      </div>

      <div>
        <header>
          Entradas
          <img src={totalcomeImg} alt='Total' />
        </header>
        <strong>R$ 5.000,00</strong>
      </div>
    </Container>
  );
}
