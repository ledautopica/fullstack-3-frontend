const SERVER_URL = "https://localhost:3001"

export const getProjects = async () => {
    try {
        const response = await fetch(`${SERVER_URL}/projects`)
        const projectJson = await response.json()
        return projectJson.project
    }catch (error){
        console.log(error)
        return[]
    }
}