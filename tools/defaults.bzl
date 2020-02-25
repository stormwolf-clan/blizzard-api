load("@npm_bazel_typescript//:index.bzl", _ts_library = "ts_library")

def ts_library(tsconfig = "//:tsconfig.json", deps = [], **kwargs):
    deps = ["@npm//tslib", "@npm//axios"] + deps

    _ts_library(
        tsconfig = tsconfig,
        deps = deps,
        **kwargs
    )
