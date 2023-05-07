import { Amplify } from 'aws-amplify';
import awsConfig from './aws-exports';

Amplify.configure(awsConfig);

const awsmobile = {
  "aws_project_region": "ap-northeast-1"
};

export default awsmobile;