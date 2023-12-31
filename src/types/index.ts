export enum AttributeType {
  DATE = 'date',
  TEXT = 'text',
  CHECKBOX = 'checkbox',
  NUMBER = 'number',
}

export interface MachineAttribute {
  id: string;
  name: string;
  type: AttributeType;
}

// Define the shape of a machine type
export interface MachineType {
  id: string;
  name: string;
  attributes: MachineAttribute[];
  titleAttribute: string;
}

// Define the shape of a machine
export interface Machine {
  id: string;
  typeId: string; // It will be MachineType id
  // It will have all attributes names as keys and values as attribute type defined in MachineType
  [key: string]: string | number | boolean;
}
