import React from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import AttributeEditor from './AttributeEditor';

const MachineTypeCard = ({ machineType }) => {
  return (
    <Card style={styles.card}>
      <Card.Title title={machineType.name} />
      <Card.Content>
        <AttributeEditor
          machineTypeId={machineType.id}
          attributes={machineType.attributes}
        />
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 16,
  },
});

export default MachineTypeCard;
