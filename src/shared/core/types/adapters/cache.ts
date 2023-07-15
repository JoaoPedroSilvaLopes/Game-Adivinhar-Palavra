type GetStorageInput = {
  key: string;
};

type SetStorageInput = {
  key: string;
  value: any;
};

type RemoveStorageInput = {
  key: string;
};

export type GetStorage = <T = any>(input: GetStorageInput) => T;

export type SetStorage = (input: SetStorageInput) => void;

export type RemoveStorage = (input: RemoveStorageInput) => void;
