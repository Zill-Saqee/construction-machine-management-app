export enum FieldType {
  DATE = 'date',
  TEXT = 'text',
  CHECKBOX = 'checkbox',
  NUMBER = 'number',
}

export interface MachineAttribute {
  id: string;
  name: string;
  type: FieldType;
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
  typeId: string;
  // Add other machine properties here
}

export interface AppState {
  machineTypes: MachineType[];
  machines: Machine[];
  filter: string | null;
}
