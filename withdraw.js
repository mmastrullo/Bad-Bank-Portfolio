

function Withdraw(){
  const ctx = React.useContext(UserContext);  


    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [withdraw, setWithdraw]   = React.useState('');
    const [balance, setBalance] = React.useState(ctx.users[0].balance);
    const [disabled, setDisabled] = React.useState(true);
  
    const validate = amount => {
        if (!amount) {
          setStatus('Error: Please enter amount to withdraw');
          return false;
        } if (amount <= 0) {
          setStatus('Error: withdraw must be >$0');
          return false;
        } if (isNaN(amount)) {
          setStatus('Error: please enter a number');
          return false;
        } if (amount>balance){
          setStatus('Error: insufficient funds');
          return false;
        }
        return true;
    }
  
    const makeWithdraw = amount => {
      if (!validate(amount)) return;
      setBalance(Number(balance) - Number(amount));
      setShow(false);
      setStatus('');
      ctx.users[0].balance -= Number(amount);
    }
  
  function clearForm(){
    setWithdraw('');
    setShow(true);
  }
  
  
  React.useEffect(() => {
    if (!withdraw) {
      setDisabled(true); 
    } else {
      setDisabled(false);
    }
  },   [withdraw]);
  
  return (
<Card
      bgcolor="dark"
      header="Withdraw"
      status={status}
      body={show ? (
        <>
          <h4>Balance: ${balance.toFixed(2)}</h4> <br />
          Withdraw Amount<br />
          <br />
          <input type="Withdraw" className="form-control" id="Withdraw" placeholder="Withdraw Amount $" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)} /> <br />
          <button type="submit" className="btn btn-light" onClick={() => makeWithdraw(withdraw)} disabled={disabled}>Withdraw Money Now</button>
        </>
      ) : (
        <>
          <h5>Withdraw successful</h5>
          <button type="submit" className="btn btn-light" onClick={clearForm}>Withdraw again?</button>
        </>
      )} />
  )
}
