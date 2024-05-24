import { Create, Edit, SimpleForm, TextInput, required, EditProps } from 'react-admin';

export const StoryCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput fullWidth source="theme" validate={[required()]} fullWidth />
            <TextInput fullWidth source="plot" multiline={true} label="plot" />
            <TextInput fullWidth source="characters" />
        </SimpleForm>
    </Create>
);

export const DraftEdit: React.FC<EditProps>  = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput multiline fullWidth source="text" validate={required()} />
            <TextInput fullWidth source="theme" validate={required()} />
            <TextInput fullWidth source="characters" />
            <TextInput fullWidth source="plot"/>
        </SimpleForm>
    </Edit>
);