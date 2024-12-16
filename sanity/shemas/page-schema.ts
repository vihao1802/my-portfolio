const page = {
  name: "page",
  title: "Pages",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "occupation",
      title: "Occupation",
      type: "string",
    },
    {
      name: "yourName",
      title: "Your Name",
      type: "string",
    },
    {
      name: "introduction",
      title: "Introduction",
      type: "text",
      rows: 5,
    },
    {
      name: "frontend",
      title: "Frontend Technologies",
      type: "text",
      rows: 5,
    },
    {
      name: "backend",
      title: "Backend Technologies",
      type: "text",
      rows: 5,
    },
    {
      name: "others",
      title: "Other Technologies",
      type: "text",
      rows: 5,
    },
    {
      name: "githubProfile",
      title: "Github Profile URL",
      type: "url",
    },
    {
      name: "facebookProfile",
      title: "Facebook Profile URL",
      type: "url",
    },
    {
      name: "toeicReadLisScore",
      title: "TOEIC Reading and Listening Score",
      type: "string",
    },
    {
      name: "toeicWriteSpeakScore",
      title: "TOEIC Writing and Speaking Score",
      type: "string",
    },
    {
      name: "pdfFile",
      title: "My CV PDF File",
      type: "file",
      options: {
        accept: "application/pdf",
      },
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
    },
  ],
};

export default page;
