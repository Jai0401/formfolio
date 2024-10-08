// pages/api/submit-form.ts

import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import handlebars from 'handlebars';

// Define interfaces
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
    // photo: File | undefined;
    name: string;
    description: string;
    projects: Project[];
    links: Link[];
}

// Define the handler function
export async function POST(request: Request) {
    try {
        // Parse the incoming JSON data
        const formData: FormData = await request.json();

        // Path to Handlebars template
        const templatePath = path.join(process.cwd(), 'templates', 'portfolio.hbs');

        // Read and compile the template
        const templateSource = fs.readFileSync(templatePath, 'utf-8');
        const template = handlebars.compile(templateSource);

        // Prepare data for template
        const formDataToRender = {
            name: formData.name,
            description: formData.description,
            projects: formData.projects,
            links: formData.links,
        };

        // Render HTML from template
        const portfolioHtml = template(formDataToRender);

        // Return the HTML as a downloadable file
        return new NextResponse(portfolioHtml, {
            headers: {
                'Content-Type': 'text/html',
                'Content-Disposition': 'attachment; filename="portfolio.html"',
            },
        });
    } catch (error) {
        console.error('Error generating HTML file:', error);
        return new NextResponse('Failed to generate HTML file.', { status: 500 });
    }
}

