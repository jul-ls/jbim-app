import { FC } from 'react';
import { useAppContext } from '../../../../middleware/context-provider';
import './building-info-menu.css';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Clear';
import Button from '@mui/material/Button';

export const ModelListMenu: FC = () => {
  const [{ building, user }, dispatch] = useAppContext();

  if (!building || !user) {
    throw new Error('Error: building or user not found!');
  }

  const onUploadModel = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.style.visibility = 'hidden';
    document.body.appendChild(input);

    input.onchange = () => {
      console.log(input.files);
      //uploading
      if (input.files && input.files.length) {
        const file = input.files[0];
        const newBuilding = { ...building };
        //unique iq usando milisseconds
        const { name } = file;
        const id = `${name}-${performance.now()}`;
        const model = { name, id };
        newBuilding.models.push(model);
        dispatch({
          type: 'UPLOAD_MODEL',
          payload: { model, file, building: newBuilding },
        });
      }
      input.remove();
    };
    input.click();
  };

  const onDeleteModel = (id: string) => {
    const newBuilding = { ...building };
    const model = newBuilding.models.find((model) => model.id === id);
    if (!model) throw new Error('Model not found!');
    newBuilding.models = newBuilding.models.filter((model) => model.id !== id);
    dispatch({
      type: 'DELETE_MODEL',
      payload: { model, building: newBuilding },
    });
  };

  //se tem length significa que existe algum modelo
  //ternary abaixo usando ? ():()
  return (
    <div>
      {building.models.length ? (
        building.models.map((model) => (
          <div className="list-item" key={model.id}>
            <IconButton onClick={() => onDeleteModel(model.id)}>
              <DeleteIcon />
            </IconButton>
            <span className="margin-left">{model.name}</span>
          </div>
        ))
      ) : (
        <p>This building has no models!</p>
      )}
      <div className="list-item">
        <Button onClick={onUploadModel}>Upload Model</Button>
      </div>
    </div>
  );
};
