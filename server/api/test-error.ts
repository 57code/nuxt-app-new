export default defineEventHandler((event) => {
  // 参数类型有问题就抛出异常
  const id =
    event.context.params && (parseInt(event.context.params.id) as number);
  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      message: "ID 应该是一个整数",
    });
  }
  return "ok";
});
