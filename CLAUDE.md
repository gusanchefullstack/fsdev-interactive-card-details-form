# Guidelines
0. Create a plan for the project and allow me to validate it. 
1. Implement the project using HTML/CSS classes only and Javascript if needed. Don't use any other external library or framworks (except vite).
2. Follow the style guidelines defined in @style-guide.md.
3. Create a README.md based in README-template.md once the project is finished
4. Use the content of the body in @index-source.html as source text
5. Use the @data.json (if exist) as source of data for info displayed.
6. Consider the figma-design file (*.fig) as source or truth for design, styling, fonts. Use also the images contained in this file like svgs if not found them in the assets/images folder.
7. The screenshots inside @design folder  (if exist) reflect the expected output for the several screens: mobile, desktop. Infer the best responsive design for tablets.
8. Initialize local git repo. Only with my approval create a repo in github. Avoid that figma designs be pushed to github (with .gitignore file).
9. Split the implementation tasks/parts of the project in separated commits .
10. Update the Author section in README with the following contact info. Add badges to each related link address. Arrange them in inline row.
    https://www.linkedin.com/in/gustavosanchezgalarza/
    https://github.com/gusanchefullstack
    https://hashnode.com/@gusanchedev
    https://x.com/gusanchedev
    https://bsky.app/profile/gusanchedev.bsky.social
    https://www.freecodecamp.org/gusanchedev
    https://www.frontendmentor.io/profile/gusanchefullstack
11. Test implementation at 375px and 1440px screens. Take screenshots for both scenarios and add them to the readme in the screenshots section. Adjust the size of screenshots to avoid big images in readme.
12. Github repo must be created with a prefix "fsdev-" to identify later the repos created.
13. Use semantic HTML (header, nav, main, aside, footer, article, section) consistently — it clarifies structure for users and assistive tech and reduces the need for extra ARIA. One main per page is a simple, high-impact rule to remember. Wrap the primary page content in a single <main> element (and remove any other main roles/elements). If you have multiple sections that look “main-like,” choose one principal area and mark others with appropriate semantics (section, aside, nav).


# Architecture
1. Implement the project using HTML/CSS and Javascript if needed.
2. Use vite as deploying server for frontend
3. The source code should be in src/ folder under the project root.
4. Colors, gradients, typography should be parameterized in the project to allow further changes.
5. Use best practices for frontend development naming convention, semantic html among others.


# Deployment
Once I confirm the project is done, deploy the project to vercel under my account (gustavosanchezgalarza@gmail.com)

# Update my landing page
1. One the project is deployed in Vercel, ask for confirmation if project should be added to my personal landing page.
2. My page is in the repo https://github.com/gusanchefullstack/gustavosanchez-landing-page
3. If confirmed, the project card should be added to the projects section, featured projects. 