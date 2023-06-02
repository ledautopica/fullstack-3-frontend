//import { method } from "cypress/types/bluebird"

const SERVER_URL = "http://localhost:3001"

export const getProjects = async () => {
    try {
        const response = await fetch(`${SERVER_URL}/projects`)
        const projectsJson = await response.json()
        return projectsJson.projects
    }catch (error){
        console.log(error)
        return[]
    }
}

export const getProject = async (id) => {
    try {
        const response = await fetch(`${SERVER_URL}/projects/${id}`)
        const projectsJson = await response.json()
        return projectsJson.project
    }catch (error){
        console.log(error)
        return[]
    }
}

export const updateProject = async project => {
    try {
        const response = await fetch(`${SERVER_URL}/projects/${project._id}`,{
        method: "UPDATE",
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify(project),
    })
        const projectsJson = await response.json()
        return projectsJson.projects
    }catch (error){
        console.log(error)
        return{}
    }
}