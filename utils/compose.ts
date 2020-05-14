export default (...funcs: Function[]): Function => (comp: any): any => {
  return funcs.reduceRight((prevResult, f) => f(prevResult), comp);
};
