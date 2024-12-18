
import Budget from '../Budget'

const Budget10th = () => {

  const modifiedRanges = [
    "1 Lacs - 2.5 Lacs",
    "2.5 Lacs - 4.2 Lacs",
    "4.2 Lacs - 6 Lacs",
    "Above 6 Lacs",
  ];
  return (
    <>
     <div>
      <Budget budgetRanges={modifiedRanges} nextPath="/formsub" prevPath="/course10th"/>
     </div>
    </>
  )
}

export default Budget10th