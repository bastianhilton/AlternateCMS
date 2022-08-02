import gql from "graphql-tag";
  import findManyAgreements from "~/graphql/queries/sales/agreements";

  const ADD_AGREEMENTS = gql `
    mutation createOneAgreements ($name:String!,$excerpt:String,$type:String,$content:String,$image:String){
      createOneAgreements(objects: {name: $name, excerpt: $excerpt, type: $type, content: $content, image: $image}) {
        name
        excerpt
        type
        content
        image
    }
}`;

  export default {
    data() {
      return {
        type: [],
        name: " ",
        excerpt: " ",
        content: " ",
        image: " ",

      }
    },
    head: {
      title: 'Add New Agreement'
    },
    methods: {
      async createOneAgreements() {
        const name = this.name;
        const content = this.content;
        const excerpt = this.excerpt;
        const type = this.type;
        const image = this.image;
        await this.$apollo.mutate({
          mutation: ADD_AGREEMENTS,
          variables: {
            name,
            excerpt,
            type,
            content,
            image,
          },
          update: (cache, {
            data: {
              insertAgreements
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedAgreement = insertAgreements.returning;
              console.log(insertedAgreement)
              cache.writeQuery({
                query: findManyAgreements
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../sales/agreements'
          })
        }).catch(err => console.log(err));
        this.name = ' ';
        this.excerpt = ' ';
        this.type = ' ';
        this.content = ' ';
        this.image = ' ';
      },

    }
  }
