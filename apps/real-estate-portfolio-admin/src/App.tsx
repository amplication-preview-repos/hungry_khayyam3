import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ServicesList } from "./services/ServicesList";
import { ServicesCreate } from "./services/ServicesCreate";
import { ServicesEdit } from "./services/ServicesEdit";
import { ServicesShow } from "./services/ServicesShow";
import { ProjectsList } from "./projects/ProjectsList";
import { ProjectsCreate } from "./projects/ProjectsCreate";
import { ProjectsEdit } from "./projects/ProjectsEdit";
import { ProjectsShow } from "./projects/ProjectsShow";
import { TestimonialsList } from "./testimonials/TestimonialsList";
import { TestimonialsCreate } from "./testimonials/TestimonialsCreate";
import { TestimonialsEdit } from "./testimonials/TestimonialsEdit";
import { TestimonialsShow } from "./testimonials/TestimonialsShow";
import { BlogPostsList } from "./blogPosts/BlogPostsList";
import { BlogPostsCreate } from "./blogPosts/BlogPostsCreate";
import { BlogPostsEdit } from "./blogPosts/BlogPostsEdit";
import { BlogPostsShow } from "./blogPosts/BlogPostsShow";
import { CaseStudiesList } from "./caseStudies/CaseStudiesList";
import { CaseStudiesCreate } from "./caseStudies/CaseStudiesCreate";
import { CaseStudiesEdit } from "./caseStudies/CaseStudiesEdit";
import { CaseStudiesShow } from "./caseStudies/CaseStudiesShow";
import { ContactInquiriesList } from "./contactInquiries/ContactInquiriesList";
import { ContactInquiriesCreate } from "./contactInquiries/ContactInquiriesCreate";
import { ContactInquiriesEdit } from "./contactInquiries/ContactInquiriesEdit";
import { ContactInquiriesShow } from "./contactInquiries/ContactInquiriesShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"RealEstatePortfolio"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Services"
          list={ServicesList}
          edit={ServicesEdit}
          create={ServicesCreate}
          show={ServicesShow}
        />
        <Resource
          name="Projects"
          list={ProjectsList}
          edit={ProjectsEdit}
          create={ProjectsCreate}
          show={ProjectsShow}
        />
        <Resource
          name="Testimonials"
          list={TestimonialsList}
          edit={TestimonialsEdit}
          create={TestimonialsCreate}
          show={TestimonialsShow}
        />
        <Resource
          name="BlogPosts"
          list={BlogPostsList}
          edit={BlogPostsEdit}
          create={BlogPostsCreate}
          show={BlogPostsShow}
        />
        <Resource
          name="CaseStudies"
          list={CaseStudiesList}
          edit={CaseStudiesEdit}
          create={CaseStudiesCreate}
          show={CaseStudiesShow}
        />
        <Resource
          name="ContactInquiries"
          list={ContactInquiriesList}
          edit={ContactInquiriesEdit}
          create={ContactInquiriesCreate}
          show={ContactInquiriesShow}
        />
      </Admin>
    </div>
  );
};

export default App;
