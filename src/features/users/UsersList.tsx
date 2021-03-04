import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  fetchUsers,
  removeUser,
  selectTotalUsers,
  selectAllUsers,
} from "./usersSlice";
import styles from "./UsersList.module.css";
import type { RootState } from "../../app/store";

function UsersList() {
  const count = useAppSelector(selectTotalUsers);
  const users = useAppSelector(selectAllUsers);
  const usersLoading = useAppSelector(
    (state: RootState) => state.users.loading
  );
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className={styles.row}>
        <button
          type="button"
          className={styles.button}
          aria-label="Fetch Users"
          onClick={() => dispatch(fetchUsers())}
          disabled={usersLoading}
        >
          Fetch Users
        </button>
      </div>
      <div className={styles.row}>
        There are <span className={styles.value}>{count}</span> users.{" "}
        {count === 0 && `Why don't you fetch some more?`}
      </div>
      {users.map((user) => (
        <div className={styles.row} key={user.id}>
          <div
            style={{ width: "80%" }}
          >{`${user.first_name} ${user.last_name}`}</div>
          <div style={{ width: "20%" }}>
            <button type="button" onClick={() => dispatch(removeUser(user.id))}>
              remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UsersList;
