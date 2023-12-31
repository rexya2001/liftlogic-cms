/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    sites: Site;
    landingPage: LandingPage;
    users: User;
    categories: Category;
    pages: Page;
    posts: Post;
    media: Media;
    forms: Form;
    'form-submissions': FormSubmission;
    redirects: Redirect;
  };
  globals: {
    header: Header;
    footer: Footer;
  };
}
export interface Site {
  id: string;
  title: string;
  address?: string;
  description?: string;
  logo?: string | Media;
  url?: string;
  social?: {
    profileLink: string;
    site: 'twitter' | 'instagram' | 'facebook' | 'youtube' | 'tiktok' | 'discord' | 'pinterest';
    id?: string;
  }[];
  faqs?: {
    name?: string;
    faq?: {
      question: string;
      answer: string;
      id?: string;
    }[];
    id?: string;
  }[];
  meta?: {
    title?: string;
    description?: string;
    image?: string | Media;
  };
  updatedAt: string;
  createdAt: string;
}
export interface Media {
  id: string;
  alt: string;
  source?: string;
  prefix?: string;
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  sizes?: {
    thumbnail?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    feature?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
  };
}
export interface LandingPage {
  id: string;
  site?: string | Site;
  layout?: (
    | {
        title?: string;
        backgroundColor?: string;
        phoneNumber?: string;
        clickToCallLabel?: string;
        description?: string;
        id?: string;
        blockName?: string;
        blockType: 'a-callToActionBlock';
      }
    | {
        introContent: {
          [k: string]: unknown;
        }[];
        populateBy?: 'collection' | 'selection';
        relationTo?: 'pages';
        categories?: string[] | Category[];
        limit?: number;
        selectedDocs?:
          | (
              | {
                  value: string;
                  relationTo: 'pages';
                }
              | {
                  value: string;
                  relationTo: 'posts';
                }
            )[]
          | (
              | {
                  value: Page;
                  relationTo: 'pages';
                }
              | {
                  value: Post;
                  relationTo: 'posts';
                }
            )[];
        populatedDocs?:
          | (
              | {
                  value: string;
                  relationTo: 'pages';
                }
              | {
                  value: string;
                  relationTo: 'posts';
                }
            )[]
          | (
              | {
                  value: Page;
                  relationTo: 'pages';
                }
              | {
                  value: Post;
                  relationTo: 'posts';
                }
            )[];
        populatedDocsTotal?: number;
        id?: string;
        blockName?: string;
        blockType: 'a-archive';
      }
    | {
        sectionImage?: string | Media;
        sectionHeader?: string;
        sectionSubheader?: string;
        noteTitle?: string;
        noteContent?: string;
        sectionDescription: {
          [k: string]: unknown;
        }[];
        formHeader?: string;
        formSubheader?: string;
        form: string | Form;
        id?: string;
        blockName?: string;
        blockType: 'a-formBlock';
      }
    | {
        mediaBlockBackgroundColor?: 'white' | 'black';
        position?: 'default' | 'fullscreen';
        media: string | Media;
        id?: string;
        blockName?: string;
        blockType: 'mediaBlock';
      }
    | {
        title?: string;
        description?: string;
        backgroundMedia: string | Media;
        enableLink1?: boolean;
        link?: {
          type?: 'reference' | 'custom';
          newTab?: boolean;
          reference: {
            value: string | Page;
            relationTo: 'pages';
          };
          url: string;
          label: string;
          appearance?: 'default' | 'primary' | 'secondary';
        };
        enableLink2?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'a-sectionBlock';
      }
    | {
        direction?: 'row' | 'column' | 'row-reversed' | 'column-reversed';
        backgroundColor?: string;
        title?: string;
        description?: string;
        media: string | Media;
        enableLink?: boolean;
        link?: {
          type?: 'reference' | 'custom';
          newTab?: boolean;
          reference: {
            value: string | Page;
            relationTo: 'pages';
          };
          url: string;
          label: string;
          appearance?: 'default' | 'primary' | 'secondary';
        };
        id?: string;
        blockName?: string;
        blockType: 'a-sectionWithImageBlock';
      }
    | {
        title?: string;
        phoneNumber?: string;
        backgroundImage: string | Media;
        backgroundColor?: string;
        formLink?: string;
        formLinkLabel?: string;
        id?: string;
        blockName?: string;
        blockType: 'a-consultationSectionBlock';
      }
    | {
        backgroundColor?: string;
        listItems?: string;
        sectionFooter?: string;
        enableLink?: boolean;
        link?: {
          type?: 'reference' | 'custom';
          newTab?: boolean;
          reference: {
            value: string | Page;
            relationTo: 'pages';
          };
          url: string;
          label: string;
          appearance?: 'default' | 'primary' | 'secondary';
        };
        id?: string;
        blockName?: string;
        blockType: 'a-listSectionBlock';
      }
    | {
        title?: string;
        phoneNumber?: string;
        phoneNumberLabel?: string;
        companylogo: string | Media;
        link?: {
          type?: 'reference' | 'custom';
          newTab?: boolean;
          reference: {
            value: string | Page;
            relationTo: 'pages';
          };
          url: string;
          label: string;
          appearance?: 'default' | 'primary' | 'secondary';
        };
        id?: string;
        blockName?: string;
        blockType: 'a-headerBlock';
      }
    | {
        siteName?: string;
        privacyPolicyLink?: string;
        id?: string;
        blockName?: string;
        blockType: 'a-footerBlock';
      }
  )[];
  updatedAt: string;
  createdAt: string;
}
export interface Category {
  id: string;
  site?: string | Site;
  title?: string;
  parent?: string | Category;
  breadcrumbs?: {
    doc?: string | Category;
    url?: string;
    label?: string;
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface Page {
  id: string;
  site?: string | Site;
  title: string;
  publishedDate?: string;
  layout?: (
    | {
        title?: string;
        backgroundColor?: string;
        phoneNumber?: string;
        clickToCallLabel?: string;
        description?: string;
        id?: string;
        blockName?: string;
        blockType: 'a-callToActionBlock';
      }
    | {
        backgroundColor?: 'white' | 'black';
        columns?: {
          size?: 'oneThird' | 'half' | 'twoThirds' | 'full';
          richText: {
            [k: string]: unknown;
          }[];
          enableLink?: boolean;
          link?: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              value: string | Page;
              relationTo: 'pages';
            };
            url: string;
            label: string;
            appearance?: 'default' | 'primary' | 'secondary';
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'content';
      }
    | {
        introContent: {
          [k: string]: unknown;
        }[];
        populateBy?: 'collection' | 'selection';
        relationTo?: 'pages';
        categories?: string[] | Category[];
        limit?: number;
        selectedDocs?:
          | (
              | {
                  value: string;
                  relationTo: 'pages';
                }
              | {
                  value: string;
                  relationTo: 'posts';
                }
            )[]
          | (
              | {
                  value: Page;
                  relationTo: 'pages';
                }
              | {
                  value: Post;
                  relationTo: 'posts';
                }
            )[];
        populatedDocs?:
          | (
              | {
                  value: string;
                  relationTo: 'pages';
                }
              | {
                  value: string;
                  relationTo: 'posts';
                }
            )[]
          | (
              | {
                  value: Page;
                  relationTo: 'pages';
                }
              | {
                  value: Post;
                  relationTo: 'posts';
                }
            )[];
        populatedDocsTotal?: number;
        id?: string;
        blockName?: string;
        blockType: 'a-archive';
      }
    | {
        mediaBlockBackgroundColor?: 'white' | 'black';
        position?: 'default' | 'fullscreen';
        media: string | Media;
        id?: string;
        blockName?: string;
        blockType: 'mediaBlock';
      }
    | {
        title?: string;
        description?: string;
        backgroundMedia: string | Media;
        enableLink1?: boolean;
        link?: {
          type?: 'reference' | 'custom';
          newTab?: boolean;
          reference: {
            value: string | Page;
            relationTo: 'pages';
          };
          url: string;
          label: string;
          appearance?: 'default' | 'primary' | 'secondary';
        };
        enableLink2?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'a-sectionBlock';
      }
    | {
        sectionImage?: string | Media;
        sectionHeader?: string;
        sectionSubheader?: string;
        noteTitle?: string;
        noteContent?: string;
        sectionDescription: {
          [k: string]: unknown;
        }[];
        formHeader?: string;
        formSubheader?: string;
        form: string | Form;
        id?: string;
        blockName?: string;
        blockType: 'a-formBlock';
      }
  )[];
  slug?: string;
  parent?: string | Page;
  breadcrumbs?: {
    doc?: string | Page;
    url?: string;
    label?: string;
    id?: string;
  }[];
  meta?: {
    title?: string;
    description?: string;
    image?: string | Media;
  };
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface Post {
  id: string;
  site?: string | Site;
  title: string;
  publishedDate?: string;
  hero: {
    type: 'none' | 'highImpact' | 'mediumImpact' | 'lowImpact';
    richText: {
      [k: string]: unknown;
    }[];
    links?: {
      link: {
        type?: 'reference' | 'custom';
        newTab?: boolean;
        reference: {
          value: string | Page;
          relationTo: 'pages';
        };
        url: string;
        label: string;
        appearance?: 'default' | 'primary' | 'secondary';
      };
      id?: string;
    }[];
    media: string | Media;
  };
  layout: (
    | {
        title?: string;
        backgroundColor?: string;
        phoneNumber?: string;
        clickToCallLabel?: string;
        description?: string;
        id?: string;
        blockName?: string;
        blockType: 'a-callToActionBlock';
      }
    | {
        backgroundColor?: 'white' | 'black';
        columns?: {
          size?: 'oneThird' | 'half' | 'twoThirds' | 'full';
          richText: {
            [k: string]: unknown;
          }[];
          enableLink?: boolean;
          link?: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              value: string | Page;
              relationTo: 'pages';
            };
            url: string;
            label: string;
            appearance?: 'default' | 'primary' | 'secondary';
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'content';
      }
    | {
        sectionImage?: string | Media;
        sectionHeader?: string;
        sectionSubheader?: string;
        noteTitle?: string;
        noteContent?: string;
        sectionDescription: {
          [k: string]: unknown;
        }[];
        formHeader?: string;
        formSubheader?: string;
        form: string | Form;
        id?: string;
        blockName?: string;
        blockType: 'a-formBlock';
      }
    | {
        mediaBlockBackgroundColor?: 'white' | 'black';
        position?: 'default' | 'fullscreen';
        media: string | Media;
        id?: string;
        blockName?: string;
        blockType: 'mediaBlock';
      }
    | {
        introContent: {
          [k: string]: unknown;
        }[];
        populateBy?: 'collection' | 'selection';
        relationTo?: 'pages';
        categories?: string[] | Category[];
        limit?: number;
        selectedDocs?:
          | (
              | {
                  value: string;
                  relationTo: 'pages';
                }
              | {
                  value: string;
                  relationTo: 'posts';
                }
            )[]
          | (
              | {
                  value: Page;
                  relationTo: 'pages';
                }
              | {
                  value: Post;
                  relationTo: 'posts';
                }
            )[];
        populatedDocs?:
          | (
              | {
                  value: string;
                  relationTo: 'pages';
                }
              | {
                  value: string;
                  relationTo: 'posts';
                }
            )[]
          | (
              | {
                  value: Page;
                  relationTo: 'pages';
                }
              | {
                  value: Post;
                  relationTo: 'posts';
                }
            )[];
        populatedDocsTotal?: number;
        id?: string;
        blockName?: string;
        blockType: 'a-archive';
      }
  )[];
  slug?: string;
  parent?: string | Post;
  breadcrumbs?: {
    doc?: string | Post;
    url?: string;
    label?: string;
    id?: string;
  }[];
  meta?: {
    title?: string;
    description?: string;
    image?: string | Media;
  };
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface Form {
  id: string;
  title: string;
  fields?: (
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: string;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'text';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: string;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'textarea';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: string;
        options?: {
          label: string;
          value: string;
          id?: string;
        }[];
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'select';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'email';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'state';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'country';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'number';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        defaultValue?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'checkbox';
      }
    | {
        message?: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'message';
      }
  )[];
  submitButtonLabel?: string;
  confirmationType?: 'message' | 'redirect';
  confirmationMessage: {
    [k: string]: unknown;
  }[];
  redirect?: {
    url: string;
  };
  emails?: {
    emailTo?: string;
    cc?: string;
    bcc?: string;
    replyTo?: string;
    emailFrom?: string;
    subject: string;
    message?: {
      [k: string]: unknown;
    }[];
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface User {
  id: string;
  name?: string;
  roles?: ('admin' | 'user')[];
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  salt?: string;
  hash?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password?: string;
}
export interface FormSubmission {
  id: string;
  form: string | Form;
  submissionData?: {
    field: string;
    value: string;
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface Redirect {
  id: string;
  from: string;
  to: {
    type?: 'reference' | 'custom';
    reference:
      | {
          value: string | Page;
          relationTo: 'pages';
        }
      | {
          value: string | Post;
          relationTo: 'posts';
        };
    url: string;
  };
  updatedAt: string;
  createdAt: string;
}
export interface Header {
  id: string;
  navItems?: {
    link: {
      type?: 'reference' | 'custom';
      newTab?: boolean;
      reference: {
        value: string | Page;
        relationTo: 'pages';
      };
      url: string;
      label: string;
    };
    id?: string;
  }[];
  updatedAt?: string;
  createdAt?: string;
}
export interface Footer {
  id: string;
  navItems?: {
    link: {
      type?: 'reference' | 'custom';
      newTab?: boolean;
      reference: {
        value: string | Page;
        relationTo: 'pages';
      };
      url: string;
      label: string;
    };
    id?: string;
  }[];
  updatedAt?: string;
  createdAt?: string;
}
