import User from '../database/entities/user.entity';

interface TokenPayload {
  user: User;
}

export default TokenPayload;
