import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { combDataProvider } from "./customDataProvider";
import { authProvider } from "./authProvider";
import { StoryCreate, DraftEdit } from "./newStory";

export const App = () => (
  <Admin dataProvider={combDataProvider} authProvider={authProvider}>
    <Resource
      name="books"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="users"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="book_drafts"
      list={ListGuesser}
      edit={DraftEdit}
      show={ShowGuesser}
      create={StoryCreate}
    /> 
  </Admin>
);
