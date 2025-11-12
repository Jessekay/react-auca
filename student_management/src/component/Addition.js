function Addition() {
  let nums = [1,2,3,4,5,6,7,8,9,10];
  let doubledNumbers = nums.map((number) => number * 2).reduce((acc, curr) => acc += curr);

  return (
    <div>
      <h1>This is Addition component</h1>
      <p>The total sum is: {doubledNumbers}</p>
    </div>
  )
}
export default Addition;