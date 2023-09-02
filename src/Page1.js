import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      isRunning: false,
    };
  }

  // Запуск секундомера
  startTimer = () => {
    if (!this.state.isRunning) {
      this.timer = setInterval(() => {
        this.setState((prevState) => ({
          seconds: prevState.seconds + 1,
          isRunning: true,
        }));
      }, 1000);
    }
  };

  // Остановка секундомера
  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ isRunning: false });
  };

  // Сброс секундомера
  resetTimer = () => {
    clearInterval(this.timer);
    this.setState({ seconds: 0, isRunning: false });
  };

  // Очистка таймера перед размонтированием компонента
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h1>1 страница</h1>
        <p>Секундомер: {this.state.seconds} сек.</p>
        <button onClick={this.state.isRunning ? this.stopTimer : this.startTimer}>
          {this.state.isRunning ? 'Стоп' : 'Продолжить'}
        </button>
        <button onClick={this.resetTimer}>Заново</button>
      </div>
    );
  }
}

export default Home;
