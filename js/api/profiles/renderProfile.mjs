import { profileTemplate } from "./profileTemplate.mjs";

export async function renderProfile() {

    try {
        const url = new URL(window.location.href);
        const profile = url.searchParams.get('name');
        console.log(profile);

        const profileData = await getProfile(profile);
        console.log(profileData);

        if (profileData) {
            const container = document.getElementById('#profileContainer');
            const profileElement = profileTemplate(profileData);
            container.appendChild(profileElement);

            
            
        }


    }