import { Bucket, Table } from 'sst/constructs';

export function StorageStack({ stack, app }) {
  // Create the DynamoDB table
  const table = new Table(stack, 'Notes', {
    fields: {
      userId: 'string',
      noteId: 'string',
    },
    primaryIndex: { partitionKey: 'userId', sortKey: 'noteId' },
  });

  const bucket = new Bucket(stack, 'Uploads');

  return {
    table,
    bucket,
  };
}
