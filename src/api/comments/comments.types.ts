export interface Params {
  num: number;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface RenameComment {
  name: string;
  email: string;
  text: string;
  id: number;
}

export interface DirYa {
  public_key: string;
  public_url: string;
  _embedded: {
    sort: string;
    public_key: string;
    items: [
      {
        public_key: string;
        name: string;
        exif: any;
        resource_id: string;
        created: string;
        modified: string;
        path: string;
        comment_ids: {
          private_resource: string;
          public_resource: string;
        };
        type: string;
        revision: number;
      }
    ];
    limit: number;
    offset: number;
    path: string;
    total: number;
  };
  name: string;
  exif: any;
  resource_id: string;
  revision: number;
  created: string;
  modified: string;
  owner: {
    login: string;
    display_name: string;
    uid: string;
  };
  path: string;
  comment_ids: {
    private_resource: string;
    public_resource: string;
  };
  type: string;
  views_count: number;
}

export interface Photo {
  file: string;
  name: string;
  path: string;
  type: string;
}
