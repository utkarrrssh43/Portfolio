const CounterCard = ({ number, title }) => {
  return (
    <div className="counter-card">

      <h2>{number}</h2>

      <p>{title}</p>

    </div>
  );
};

export default CounterCard;