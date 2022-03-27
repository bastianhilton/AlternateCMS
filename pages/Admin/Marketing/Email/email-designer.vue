<template>
  <div id="app">
    <div>
      <div id="bar">
        <FormulateInput type="button" style="display: inline-block;" @click="saveDesign">Save Design</FormulateInput>
        <FormulateInput type="button" style="display: inline-block;" @click="exportHtml">Export HTML</FormulateInput>
      </div>

      <EmailEditor
        ref="emailEditor"
        :appearance="appearance"
        :min-height="minHeight"
        :project-id="projectId"
        :locale="locale"
        :tools="tools"
        :options="options"
        @load="editorLoaded"
      />

    </div>
  </div>
</template>

<script>
  import { EmailEditor } from 'vue-email-editor'
  
  export default {
    name: 'App',
    components: {
      EmailEditor
    },
    layout: 'dashboard',
    data() {    
      return {  
        minHeight: "1000px",
        locale: "en",
        projectId: 70121, // replace with your project id
        tools: {
          // disable image tool
          image: {
            enabled: false
          }
        },
        options: {},
        appearance: {
          theme: 'dark',
          panels: {
            tools: {
              dock: 'right'
            }
          }
        } 
      }
    },
    head: {
        title: 'Email Designer'
    },
    methods: {
      editorLoaded() {
        // Pass your template JSON here
        // this.$refs.emailEditor.editor.loadDesign({});
      },
      saveDesign() {
        this.$refs.emailEditor.editor.saveDesign(
          (design) => {
            console.log('saveDesign', design);
          }
        )
      },
      exportHtml() {
        this.$refs.emailEditor.editor.exportHtml(
          (data) => {
            console.log('exportHtml', data);
          }
        )
      }
    }
  }
</script>

<style>
#bar {
  top: 10px;
  position: relative;
}

#editor-1 iframe {
  height: 100vh !important;
}
</style>