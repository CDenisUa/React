export const selectAllPosition = (state) => state.positions;
export const selectVisiblePositions = (state, filters) => {
    if(filters.leading === 0) return state.position;
    return state.position.filter(pos => {
        const posFilters = [].concat(pos.role, pos.level, ...pos.languages, ...pos.tools);
        return filters.every( filter => posFilters.includes(filter))
    })
}
