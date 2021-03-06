import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query trainings {
  trainings {
    id
    grade
    faqs
    fieldTrips
    digiboards
    createdAt
    course
    country
    competency
    content
    comment
    city
    checklists
    badges
    assignmentsDueDate
    assignments
    anncouncement
    analytics
    address
    isCompleted
    isPublic
    lab
    languages
    link
    media
    meetups
    name
    nodeId
    origanlityReport
    postal
    products
    resource
    school
    speakers
    state
    steps
    student
    subject
    teacher
    updated
  }
}`
    }
  }
}