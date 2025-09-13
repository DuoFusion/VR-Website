import { InvalidateQueryFilters, QueryKey, useMutation, UseMutationOptions, useQueryClient } from "@tanstack/react-query";
// import { notification } from "antd";
import { HTTP_STATUS } from "../../constants";
// import { useAppDispatch } from "../../store/hooks";
// import { logout } from "../../store/slices/AuthSlice";
import { CombinedErrorResponse } from "../../types";
// import { AntdNotification, ErrorMessage } from "../../utils/toast";

function useApiDelete<TInput, TResponse>(mutationKey: QueryKey, callback: (input: TInput) => Promise<TResponse>, options?: UseMutationOptions<TResponse, CombinedErrorResponse, TInput>) {
  const q = useQueryClient();
  // const dispatch = useAppDispatch();
  return useMutation<TResponse, CombinedErrorResponse, TInput>({
    mutationKey,
    mutationFn: callback,
    ...options,
    onSuccess: (data, variables, context) => {
      for (let i = 1; i < mutationKey.length; i++) {
        q.invalidateQueries({ queryKey: [mutationKey[i]] } as InvalidateQueryFilters);
      }
      options?.onSuccess?.(data, variables, context);
    },
    onError: (error: CombinedErrorResponse) => {
      switch (error.status) {
        case HTTP_STATUS.UNAUTHORIZED:
          // dispatch(logout());
          // navigate(ROUTES.LOGIN + `?returnUrl=${window.location.pathname}`, {
          //   replace: true,
          // });
          break;
        default:
          // AntdNotification(notification, "error", ErrorMessage(error));
          break;
      }
    },
  });
}

export default useApiDelete;
