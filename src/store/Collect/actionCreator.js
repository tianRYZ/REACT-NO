import * as actionTyps from './constant'


export const setCollect = (collect) => ({
  type: actionTyps.COLLECT,
  collect
})

export const removeCollect = (id) => ({
  type: actionTyps.UNCOLLECT,
  id
})