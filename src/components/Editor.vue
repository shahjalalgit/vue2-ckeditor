<template>
  <div class="editor-container">
    <ckeditor
      :editor="editor"
      v-model="localContent"
      :config="editorConfig"
      @ready="onEditorReady"
    ></ckeditor>
    <div class="preview mt-4">
      <h3>Preview:</h3>
      <div v-html="localContent" class="preview-content"></div>
    </div>
  </div>
</template>

<script>
import CKEditor from "@ckeditor/ckeditor5-vue2";
// import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import {
  ClassicEditor,
  Essentials,
  Paragraph,
  Bold,
  Italic,
  Code,
  Strikethrough,
  Subscript,
  Superscript,
  Heading,
  Underline,
  Alignment,
  List,
  Font,
  Table,
  TableCaption,
  TableToolbar,
  Image,
  ImageResizeEditing,
  ImageResizeHandles,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  ImageCaption,
  LinkImage,
  ImageInsert,
  Autoformat,
  Indent,
  IndentBlock,
  BlockQuote,
  Emoji,
  FindAndReplace,
  Fullscreen,
  HorizontalLine,
  FullPage,
  SourceEditing 
} from "ckeditor5";
import axios from "axios";
import "ckeditor5/ckeditor5.css";
class ImgurUploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }

  upload() {
    return this.loader.file.then((file) => {
      const formData = new FormData();
      formData.append("image", file);

      return axios
        .post("https://api.imgur.com/3/image", formData, {
          headers: {
            Authorization: "Client-ID 546b2ff22edc13b",
          },
        })
        .then((response) => {
          return {
            default: response.data.data.link,
          };
        });
    });
  }
}

const basicTextPlugins = [
  Paragraph,
  Bold,
  Italic,
  Code,
  Strikethrough,
  Subscript,
  Superscript,
  Font,
  Heading,
  Underline,
  List,
  Alignment,
  Autoformat,
  Indent,
  IndentBlock,
  BlockQuote,
  FindAndReplace,
  Fullscreen,
  HorizontalLine,
  FullPage,
  SourceEditing
];

const itemsToolbar = [
  "bold",
  "italic",
  "underline",
  "strikethrough",
  "alignment",
  "fontSize",
  "fontFamily",
  "bulletedList",
  "numberedList",
  "outdent",
  "indent",
  "code",
  "blockQuote",
  "fontColor",
  "fontBackgroundColor",
  "heading",
  "findAndReplace",
  "fullscreen",
  "horizontalLine",
  "sourceEditing",
];

function ImgurUploadAdapterPlugin(editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    return new ImgurUploadAdapter(loader);
  };
}

export default {
  name: "Editor",
  components: {
    ckeditor: CKEditor.component,
  },
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      editor: ClassicEditor,
      localContent: this.value,
      editorConfig: {
        licenseKey: "GPL", // Changed from 'GPL' to empty string for development
        plugins: [
          Essentials,
          ...basicTextPlugins,
          Paragraph,
          Bold,
          Italic,
          Table,
          TableToolbar,
          TableCaption,
          Image,
          ImageResizeEditing,
          ImageResizeHandles,
          ImageStyle,
          ImageToolbar,
          ImageUpload,
          ImageCaption,
          LinkImage,
          ImageInsert,
          ImgurUploadAdapterPlugin,
        ],
        toolbar: {
          items: [
            "undo",
            "redo",
            "|",
            "insertImage",
            "resizeImage",
            "|",
            "insertTable",
            "|",
            ...itemsToolbar,
            "|",
            "emoji",
          ],
        },
        image: {
          toolbar: [
            "imageTextAlternative",
            "|",
            "imageStyle:inline",
            "imageStyle:block",
            "|",
            "imageStyle:alignLeft",
            "imageStyle:alignCenter",
            "imageStyle:alignRight",
            "|",
            "imageStyle:alignBlockLeft",
            "imageStyle:alignBlockRight",
            "|",
            "linkImage",
            "resizeImage",
          ],
          upload: {
            types: ["jpeg", "png", "gif", "bmp", "webp", "tiff"],
          },
          styles: ["full", "side", "alignLeft", "alignCenter", "alignRight", "alignBlockLeft", "alignBlockRight", "inline", "block"],
          resizeOptions: [
            {
              name: "resizeImage:original",
              label: "Original",
              value: null,
            },
            {
              name: "resizeImage:50",
              label: "50%",
              value: "50",
            },
            {
              name: "resizeImage:75",
              label: "75%",
              value: "75",
            },
          ],
        },
        
        table: {
          contentToolbar: [
            "tableColumn",
            "tableRow",
            "mergeTableCells",
            "toggleTableCaption",
          ],
        },
        fontFamily: {
          supportAllValues: true,
        },
        fontSize: {
          options: [10, 12, 14, "default", 18, 20, 22],
          supportAllValues: true,
        },
        heading: {
          options: [
            {
              model: "paragraph",
              title: "Paragraph",
              class: "ck-heading_paragraph",
            },
            {
              model: "heading1",
              view: "h1",
              title: "Heading 1",
              class: "ck-heading_heading1",
            },
            {
              model: "heading2",
              view: "h2",
              title: "Heading 2",
              class: "ck-heading_heading2",
            },
            {
              model: "heading3",
              view: "h3",
              title: "Heading 3",
              class: "ck-heading_heading3",
            },
            {
              model: "heading4",
              view: "h4",
              title: "Heading 4",
              class: "ck-heading_heading4",
            },
            {
              model: "heading5",
              view: "h5",
              title: "Heading 5",
              class: "ck-heading_heading5",
            },
            {
              model: "heading6",
              view: "h6",
              title: "Heading 6",
              class: "ck-heading_heading6",
            },
          ],
        },
        htmlSupport: {
          allow: [
            {
              name: /^.*$/,
              styles: true,
              attributes: true,
              classes: true,
            },
          ],
        },
      },
    };
  },
  watch: {
    value(newValue) {
      if (newValue !== this.localContent) {
        this.localContent = newValue;
      }
    },
    localContent(newValue) {
      this.$emit("input", newValue);
    },
  },
  methods: {
    onEditorReady() {
      console.log("Editor is ready to use!");
    },
  },
};
</script>

<style scoped>
.editor-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.preview {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.preview h3 {
  margin-bottom: 15px;
  color: #333;
}

.preview-content {
  padding: 15px;
  background: #f9f9f9;
  border-radius: 4px;
}

:deep(.ck-editor__editable) {
  min-height: 300px;
}
</style>
