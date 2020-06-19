export interface SignUpType {
  userId: string;
  givenName: string;
  familyName: string;
  password: string;
}

export interface SignInType {
  userId: string;
  password: string;
}

export interface UploadFileType {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

export interface HTMLElementEvent<T extends HTMLElement> extends Event {
  target: T;
}
