import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";
import { Dropdown, DropdownChangeParams } from "primereact/dropdown";

interface InputDialogProps {
  showDialog: boolean;
  onHide: () => void;
}

const DeleteDialog = ({ showDialog, onHide }: InputDialogProps) => {
  return (
    <Dialog
      header="Delete Item"
      visible={showDialog}
      style={{ width: "400px" }}
      footer={
        <>
          <Divider />
          <Button type="submit" label="Close" onClick={() => onHide()} />
        </>
      }
      closable={false}
      modal={true}
      onHide={onHide}
    >
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old.
      </p>
    </Dialog>
  );
};

export default DeleteDialog;
