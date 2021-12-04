def read_file(file_name)
  file = File.open(file_name, "r")
  data = file.read
  file.close
  return data
end

file_name = "input.txt"
arr = read_file(file_name).split("\n").map(&:to_i)
sum = 0
for i in 1...arr.size do
  sum += 1 if arr[i] > arr[i-1]
end
puts sum