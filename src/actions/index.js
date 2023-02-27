export const updateState = (data) => {
    return {
        type: 'UPDATE_STATE',
        payload: data
    }
}


export const updateTime = (data) => {
    return {
        type: 'UPDATE_TIME',
        payload: data
    }
}

export const updateSiderCollapse = (data) => {
    return {
        type: 'SIDER_COLLAPSE',
        payload: data
    }
}