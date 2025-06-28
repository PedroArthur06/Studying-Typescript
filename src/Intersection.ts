// Usando types
type FileData = {
  path: string;
  content: string;
}

type DataBaseData = {
  connectionURL: string;
  credentials: {
    username: string;
    password: string;
  };
}

type Status = {
  isOpen: boolean;
  errorMessage?: string;
}

type AcessFileData = FileData & Status;
type AcessDataBaseData = DataBaseData & Status;

// Usando interfaces
interface FileDataInterface {
  path: string;
  content: string;
}

interface DataBaseDataInterface {
  connectionURL: string;
  credentials: {
    username: string;
    password: string;
  };
}

interface StatusInterface {
  isOpen: boolean;
  errorMessage?: string;
}

interface AcessFileDataInterface extends FileDataInterface, StatusInterface {}
interface AcessDataBaseDataInterface extends DataBaseDataInterface, StatusInterface {}