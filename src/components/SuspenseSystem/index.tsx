import { Suspense } from 'react';
import { IChildrenBase } from '../../@types';
import Loading from '../Loading';

function SuspenseSystem({ children }: IChildrenBase) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}

export default SuspenseSystem;
