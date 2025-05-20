const { useState, useEffect } = require('react');
const { useTranslation } = require('react-i18next');
const fs = require('fs');
const path = require('path');
// Utility to read resume.html by id (assuming id is filename or part of filename)
function getResumeHtmlById(id) {
    const resumePath = path.join(__dirname, 'resume.html');
    if (!fs.existsSync(resumePath)) return null;
    const html = fs.readFileSync(resumePath, 'utf8');
    // If you want to extract a specific element by id from the HTML:
    const match = html.match(new RegExp(`<[^>]+id=["']${id}["'][^>]*>[\\s\\S]*?<\\/[^>]+>`));
    return match ? match[0] : null;
}
    
// React component to display the resume
    
function Resume({ id }) {
    const { t } = useTranslation();
    const [resumeHtml, setResumeHtml] = useState('');

    useEffect(() => {
        const html = getResumeHtmlById(id);
        if (html) {
            setResumeHtml(html);
        } else {
            setResumeHtml(t('resume.notFound'));
        }
    }, [id, t]);

    return (
        <div>
            <h1>{t('resume.title')}</h1>
            <div dangerouslySetInnerHTML={{ __html: resumeHtml }} />
        </div>
    );
}
