
export const FalseConditional = () => ''
export const TrueConditional = ({ children }) => children

export const getConditional = cond => (cond ? TrueConditional : FalseConditional)

export const createConditionals = conditionals =>
  Object.keys(conditionals).reduce((a, key) => ({
    ...a,
    [key]: getConditional(conditionals[key]),
    not: {
      ...a.not,
      [key]: getConditional(!conditionals[key])
    }
  }), { not: {} });
