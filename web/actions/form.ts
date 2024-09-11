"use server"

interface Project {
    title: string;
    description: string;
    link: string;
}

interface Link {
    title: string;
    url: string;
}

interface FormData {
    photo: File | undefined;
    name: string;
    description: string;
    projects: Project[];
    links: Link[];
}
export async function submitForm(formData: FormData) {
    //validation using zod

    console.log(formData);
    return {
        status: 200,
        body: {message: "Form submitted successfully"}
    }

}