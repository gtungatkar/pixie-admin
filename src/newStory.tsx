// NewStory.tsx
// import React, { useState } from 'react';
// import {
//     useNotify,
//     useRedirect,
//     SimpleForm,
//     TextInput,
//     required,
//     SaveContextProvider,
// } from 'react-admin';
// import { useForm, FormApi } from 'react-final-form';

// interface CustomFormProps {
//     basePath?: string;
//     resource?: string;
//     save?: (values: any, redirect: any) => void;
// }

// export const newStory: React.FC<CustomFormProps> = ({ basePath, resource }) => {
//     const notify = useNotify();
//     const redirect = useRedirect();
//     const form = useForm() as FormApi; // type assertion to FormApi from react-final-form
//     const [loading, setLoading] = useState(false);

//     const handleSubmit = async (values: Record<string, any>) => {
//         setLoading(true);
//         const authToken = localStorage.getItem('user');
//         try {
//             const response = await fetch('https://lreslndufqsfccnjwytb.supabase.co/functions/v1/newstory', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${authToken}`,
//                     'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyZXNsbmR1ZnFzZmNjbmp3eXRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzMDU0MTcsImV4cCI6MjAyMzg4MTQxN30.gZ9yty222zgWzS_sZ92wo43VEvs2CoC7-JadtR_cSs8'
//                 },
//                 body: JSON.stringify({'data': values}),
//             });

//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }

//             const data = await response.json();
//             notify('Form submitted successfully', { type: 'success' });
//             redirect('list', basePath || '');
//             form.restart();
//         } catch (error: any) {
//             notify(`Error: ${error.message}`, { type: 'warning' });
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <SimpleForm save={handleSubmit} resource={resource} toolbar={null}>
//             <TextInput source="theme" validate={required()} />
//             <TextInput source="characters" validate={required()} />
//             <TextInput source="plot" multiline validate={required()} />
//             <button type="submit" disabled={loading}>
//                 {loading ? 'Submitting...' : 'Submit'}
//             </button>
//         </SimpleForm>
//     );
// };

import { Create, SimpleForm, TextInput, required } from 'react-admin';

export const StoryCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="theme" validate={[required()]} fullWidth />
            <TextInput source="plot" multiline={true} label="plot" />
            <TextInput source="characters" />
        </SimpleForm>
    </Create>
);