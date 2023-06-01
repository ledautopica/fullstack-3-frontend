const SERVER_URL = "http://localhost:3001"

export const getProjects = async () => {
    try {
        const response = await fetch(`${SERVER_URL}/projects`)
        const projectJson = await response.json()
        return projectJson.projects
    }catch (error){
        console.log(error)
        return[]
    }
}

export const getProject = async (id) => {
    try {
        const response = await fetch(`${SERVER_URL}/projects/${id}`)
        const projectJson = await response.json()
        return projectJson.project
    }catch (error){
        console.log(error)
        return[]
    }
}