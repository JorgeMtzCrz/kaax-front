const handleAsync = async asyncFn => {
    let result
    try {
        const {data} = await asyncFn()
        result = data
    } catch (error) {
        const {data} = error.response
        result = data
    }

    return result
}

export default handleAsync